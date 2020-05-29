from detecto import core, utils
from uuid import uuid4
from threading import Thread
from time import time, sleep

jobs = {}
ml_model = core.Model()


def start_object_detection_job(filename):
    job_id = str(uuid4())
    jobs[job_id] = {'completed': False}
    job = Thread(daemon=True, target=detect_objects,
                 args=(job_id, utils.read_image(filename)))
    job.start()
    return job_id


def detect_objects(job_id, image):
    print("Starting job %s..." % job_id)
    start_time = time()
    # Detect and identify the objects in the image
    labels, boxes, scores = ml_model.predict_top(image)
    boxes = boxes.tolist()
    scores = scores.tolist()

    jobs[job_id] = {
        'completed': True,
        'labels': labels,
        'boxes': boxes,
        'scores': scores
    }
    print("Completed job %s in %.2fs." % (job_id, time()-start_time))


def get_results(job_id):
    return jobs[job_id]
