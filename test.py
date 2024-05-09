from models import Group, storage



for i in range(10):
    gr = Group()
    gr.name = f"Group {i}"
    gr.save()

gr = storage.all(Group)
print(gr)
exit(0)