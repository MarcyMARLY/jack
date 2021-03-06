from django.shortcuts import get_object_or_404,render
from django.http import HttpResponse,HttpResponseRedirect, JsonResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from django.template import loader
from django.http import Http404
from .models import Organization,Card,Gather,User
from django.urls import reverse
from .serializers import OrganizationSerializer,CardSerializer,GatherSerializer,UserSerializer

# Create your views here.
@csrf_exempt
def users(request):
    if request.method == "GET":
        users = User.objects.all()
        ser = UserSerializer(users, many = True)
        return JsonResponse(ser.data, safe = False)
    elif request.method == "POST":
        data = JSONParser().parse(request)
        ser = UserSerializer(data=data)
        if(ser.is_valid()):
            ser.save()
            return JsonResponse(ser.data,status=201)
        return JsonResponse(ser.errors, status=400)

@csrf_exempt
def checkuser(request):
    if request.method == "POST":
        data = JSONParser().parse(request)
        ser = UserSerializer(data=data)

        if ser.is_valid():
            username = ser.data.get('username')
            password = ser.data.get('password')
            print(ser.data.get('username'))
            print(ser.data.get('password'))
            try:
                user = User.objects.get(username=username, password=password)
            except Exception as e:
                return JsonResponse({"error": str(e)}, status=404)
            print(user.id)
            return JsonResponse({"userId": user.id}, status = 200)
        else:
            return JsonResponse(ser.errors, status = 404)


@csrf_exempt
def organizations(request):
    if request.method == "GET":
        organizations = Organization.objects.all()
        ser = OrganizationSerializer(organizations, many = True)
        return JsonResponse(ser.data, safe = False)
    elif request.method == "POST":
        data = JSONParser().parse(request)
        ser = OrganizationSerializer(data=data)
        if(ser.is_valid()):
            ser.save()
            return JsonResponse(ser.data,status=201)
        return JsonResponse(ser.errors, status=400)

@csrf_exempt
def organization_detail(request, or_id):
    try:
        organization = Organization.objects.get(pk=or_id)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=404)
    if request.method == "GET":
        ser = OrganizationSerializer(organization)
        return JsonResponse(ser.data)
    elif request.method == "PUT":
        data = JSONParser().parse(request)
        ser = OrganizationSerializer(organization, data)
        if(ser.is_valid()):
            ser.save()
            return JsonResponse(ser.data)
    elif request.method == "DELETE":
        organization.delete()
        ser = OrganizationSerializer(organization)
        return JsonResponse(ser.data)

@csrf_exempt
def gathers(request, or_id):
    if request.method == "GET":
        gathers = Organization.objects.get(pk=or_id).gather_set.all()
        ser = GatherSerializer(gathers, many = True)
        return JsonResponse(ser.data, safe = False)
    elif request.method == "POST":
        data = JSONParser().parse(request)
        ser = GatherSerializer(data=data)
        if(ser.is_valid()):
            ser.save()
            return JsonResponse(ser.data,status=201)
        return JsonResponse(ser.errors, status=400)


@csrf_exempt
def gather_detail(request, or_id, g_id):
    try:
        gathers = Organization.objects.get(pk=or_id).gather_set.get(pk=g_id)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=404)
    if request.method == "GET":
        ser = GatherSerializer(gathers)
        return JsonResponse(ser.data)
    elif request.method == "PUT":
        data = JSONParser().parse(request)
        ser = GatherSerializer(gathers, data)
        if(ser.is_valid()):
            ser.save()
            return JsonResponse(ser.data)
    elif request.method == "DELETE":
        gathers.delete()
        ser = GatherSerializer(gathers)
        return JsonResponse(ser.data)

@csrf_exempt
def cards(request,or_id, g_id):
    if request.method == "GET":
        cards = Organization.objects.get(pk=or_id).gather_set.get(pk=g_id).card_set.all()
        ser = CardSerializer(cards, many = True)
        return JsonResponse(ser.data, safe = False)
    elif request.method == "POST":
        data = JSONParser().parse(request)
        ser = CardSerializer(data=data)
        if(ser.is_valid()):
            ser.save()
            return JsonResponse(ser.data,status=201)
        return JsonResponse(ser.errors, status=400)

@csrf_exempt
def card_detail(request, or_id, g_id, c_id):
    try:
        cards = Organization.objects.get(pk=or_id).gather_set.get(pk=or_id).card_set.get(pk=c_id)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=404)
    if request.method == "GET":
        ser = CardSerializer(cards)
        return JsonResponse(ser.data)
    elif request.method == "PUT":
        data = JSONParser().parse(request)
        ser = CardSerializer(cards, data)
        if(ser.is_valid()):
            ser.save()
            return JsonResponse(ser.data)
    elif request.method == "DELETE":
        cards.delete()
        ser = CardSerializer(cards)
        return JsonResponse(ser.data)
