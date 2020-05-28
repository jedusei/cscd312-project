from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['POST'])
def detect_objects_api_view(request):
    return Response({'message': 'Hello World!'})
