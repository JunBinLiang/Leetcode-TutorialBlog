
```
class Solution {
    public int[] twoSum(int[] A, int T) {
        for(int i=0;i<A.length;i++){
            for(int j=i+1;j<A.length;j++){
                if(A[i]+A[j]==T)return new int[]{i,j};
            }
        }
        return null;
    }
}
```