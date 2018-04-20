from django.shortcuts import get_object_or_404,render
from django.http import HttpResponse,HttpResponseRedirect, JsonResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from django.template import loader
from django.http import Http404
from .models import Organization,Card,Gather
from django.urls import reverse
from .serializers import OrganizationSerializer,CardSerializer,GatherSerializer

# Create your views here.
@csrf_exempt
def organizations(request):
    if request.method == "GET":
        organizations = Organization.objects.all
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
def gathers(request):

@csrf_exempt
def gather_detail(request, or_id, g_id):

@csrf_exempt
def cards(request):

@csrf_exempt
def card_detail(request, or_id, g_id, c_id):
