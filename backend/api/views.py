from django.shortcuts import get_object_or_404
from .models import Item
from .serializers import ItemSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def api_root_view(request):
    routes = {
        "get_items_view" : "http://127.0.0.1:8000/api/v1/items - GET",
        "post_item_view" : "http://127.0.0.1:8000/api/v1/items/post - POST",
        "get_item_view" : "http://127.0.0.1:8000/api/v1/items/detail/pk - GET",
        "put_item_view" : "http://127.0.0.1:8000/api/v1/items/update/pk - PUT",
        "delete_item_view" : "http://127.0.0.1:8000/api/v1/items/delete/pk - DELETE",
    }
    return Response(routes)

@api_view(['GET'])
def get_items_view(request):
    items = Item.objects.all()
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def post_item_view(request):
    serializer = ItemSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_item_view(request, pk):
    item = get_object_or_404(Item, pk=pk)
    serializer = ItemSerializer(item)
    return Response(serializer.data)

@api_view(['PUT'])
def put_item_view(request, pk):
    item = get_object_or_404(Item, pk=pk)
    serializer = ItemSerializer(item, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_item_view(request, pk):
    item = get_object_or_404(Item, pk=pk)
    item.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)