from rest_framework.decorators import api_view
from rest_framework.response import Response
from .ai_detecto import start_object_detection_job, get_results

@api_view(['POST'])
def detect_objects_api_view(request): 
    imageFile = request.FILES['image'].file
    f = open('image.tmp','wb')
    f.write(imageFile.read())
    f.close()
    job_id = start_object_detection_job('image.tmp')
    return Response({'job_id': job_id})


@api_view(['GET'])
def get_results_api_view(request):
    results = get_results(request.query_params['job_id'])
    return Response(results)
