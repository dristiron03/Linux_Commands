read n
sum=0
for (( i=1 ; i<=$n ; i++ ))
do
  read a
  sum=` expr $sum + $a `
   
done
printf "%.3f" $(echo $sum/$n | bc -l)



array=($(cat))
printf "%.3f" $(echo ${array[@]} | bc -l)
