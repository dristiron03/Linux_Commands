i=0
declare -a array
while read line
do 
    if [ $i -ge 3 -a $i -le 7 ]
    then
        array[$i]= $line

((i+=1))
done

echo ${array[@]}    
