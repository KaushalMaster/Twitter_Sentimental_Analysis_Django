from django.shortcuts import render

# Create your views here.


def index(request):
    if request.method == 'POST':
        img = request.POST.getfile('input_file')
        print(img)
    return render(request, 'index.html')
