function sum(nums, target) {
    for (let i=0;i<nums.length;i++)
    {
        for(let j=0;j<nums.length;j++)
        {
            if(nums[i]+nums[j]===target)
            {
                return [i,j]
            }
        }
    }
};

var f=sum([2,7,11,15,14,5,9,6],19);
console.log(f[0],f[1]);
document.write(f);