from detecto import core, utils 
from uuid import uuid4
from threading import Thread
from time import time, sleep

jobs = {}
# ml_model = core.Model()


def start_object_detection_job(filename):
    job_id = str(uuid4())
    jobs[job_id] = {'completed': False}
    job = Thread(daemon=True, target=detect_objects,
                 args=(job_id,utils.read_image(filename)))
    job.start()
    return job_id


def detect_objects(job_id, image):
    print("Starting job %s..." % job_id)
    start_time = time()
    # Detect and identify the objects in the image
    # labels, boxes, scores = ml_model.predict_top(image)
    # boxes = boxes.tolist()
    # scores = scores.tolist()
    sleep(3)
    labels = ['dining table', 'orange', 'apple']
    boxes = [
        [0.0, 6.254682540893555, 440.0000305175781, 302.0],
        [221.93572998046875,   63.224151611328125,
            423.9753112792969,       277.3030700683594],
        [87.82152557373047, 38.47739791870117,
            241.7848358154297, 208.9991455078125]
    ]
    scores = [0.2846580743789673, 0.9972997307777405, 0.9459781646728516]

    jobs[job_id] = {
        'completed': True,
        'labels': labels,
        'boxes': boxes,
        'scores': scores
    }
    print("Completed job %s in %.2fs." % (job_id, time()-start_time))


def get_results(job_id):
    return jobs[job_id]
