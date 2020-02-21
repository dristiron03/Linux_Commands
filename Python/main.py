#print("My first program")
#print("Enter your name")
#name = input()
#print("Hello, "+name)
#print(3<4)
#count = 5
#print("There are",count,"students")
#print("line1",end="")
#print("line2",end="@")
#print("line3",end="\n")
#print("line4",end=" ")
#print("line5",end=":")
"""count = 1
while count < 5 :
	print(count)
	count += 1

for i in range(1,6):
	for j in range(1,11):
		print("o",end="")
	print(end="\n")"""
"""s = "this is a sentence"
a = s.split(" ")
# Break s at every space found
print(a)"""
s = "python"
if 'o' in s :
	print("present")
else:
	print("not present")	

a = [ 3 , 6 , 1 , 0 ]
a.sort()

'''def cube(n):
	ans = n*n*n
	return ans
number = int(input("Enter number : "))
print( cube(number) )'''
n,r = 4,2
p=[]
for item in range(11):
	p.append(2**item)
print(p)

b=[ 2**item for item in range(11)]
print(b,end="@ \n")

assignments = [ "CS101" , "MA102" , "PH102" , "BT101" , "ME101" , "EE110" ]
completed = [ "PH102" , "CS101" ]
pending=[]
for item in assignments:
	if item not in completed:
		pending.append(item)
print(pending)			

pending=[item for item in assignments if item not in completed]
print(pending)
'''b=map(float,input().split())
print(b)
c=list(map(float,input().split()))
print(c)'''

'''x,y,z=map(float,input().split())
print(x)
print(y)
print(z)
p=(x,y,z)
print(p)'''

'''points=[]
for i in range(2):
	print("Coordinates of point",i+1,":",end=" ")
	x,y,z = map(float,input().split())
	p = (x,y,z)
	points.append(p)
print(points)'''

'''a = [ 5, 6, 8, 9, 1, 0 ]
b = [ 9, 2, 4, 6 ]
c = [ 8, 2, 10, 0, 5 ]
d,e,f,g=zip(a,b,c)
print(d)
print(e)
print(f)
print(g)

a = [ [ 3, -5, -7, 9 ],
	  [ 13, 0, -2, 1 ],
      [ -9, 8, 3, -1 ] ]
b = [ [ 0, -5, 10, 6 ],
      [ 6, 8, 13, -4 ],
      [ 8, 9, -7, -1 ] ]
r=len(a)
c=len(a[0])
ans=[]      
for i in range(r):
	ans.append([])
	for j in range(c):
		ans[i].append(a[i][j]+b[i][j])
print(ans) '''

'''a=[1,2]
a.clear()
print(a)'''

student = {}
student["name"] = "ABC"
student["year"] = 1
student["cpi"] = 9.0
student["dept"] = "CSE"
student["courses"] = [ "CS101" , "MA102" , "CS110" ]
student["gratuated"] = False
'''for k in student:
	print(k,"=",student[k])   

for k,v in student.items():
	print(k,"=",v)'''

'''student.pop("cpi", None)	
print(student)

a = list(map(int,input().split(" "))) 
d = {5:1} 
for x in a:
	if x not in d:
		d[x] = 1
	else:
		d[x] += 1
print(d)'''

'''data = [
{
"name" : "name1",
"year" : 1,
"cpi"
: 8.5,
"dept" : "ECE"
},
{
"name" : "name2",
"year" : 2,
"cpi"
: 8.2,
"dept" : "MNC"
},
{
"name" : "name2",
"year" : 3,
"cpi"
: 8.1,
"dept" : "CSE"
}
]
names = [ x["name"] for x in data ]
print(names)'''

'''students = {
"140101001" : [ "CS101" , "EE101" , "CS201" ],
"140102001" : [ "MA101" , "EE101" , "EE201" ],
"140103001" : [ "CS101" , "ME101" ],
"140123001" : [ "MA101" , "CS101" , "MA201" ]
}
result = {
"MA321" : [ "140101001" , "140123001" ],
"EE301" : [ "140102001" , "140103001" ],
"ME301" : [ "140103001" ]
}
for course in result:
	for rollno in result[course]:
		students[rollno].append(course)

print(students)'''
'''
f=open("html3","r")
a=f.readlines()
#print(a)

#s="samay"
g=open("html4","w")
g.writelines(a)

h=open("html3","r")
s=h.read()
print(s)
'''

