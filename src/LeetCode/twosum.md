import java.util.*;
class Solution {
	public static int[] twoSum(int[] A, int T) {
        for(int i=0;i<A.length;i++){
            for(int j=i+1;j<A.length;j++){
                if(A[i]+A[j]==T)return new int[]{i,j};
            }
        }
        return null;
    }

	public static void main(String[] args){
		int A[]=new int[]{1,2,3,4,5,6,7,8,9,10};
		int result[]=twoSum(A,5);
		for(int i:result){
			System.out.println(i+"  ");
		}
		System.out.println();
	}
}

```
class Solution {
public:
    vector<int> twoSum(vector<int>& A, int target) {
        unordered_map<int,int>hash;
        for(int i=0;i<A.size();i++){
            if(hash.count(target-A[i])!=0){
                return {hash[target-A[i]],i};
            }
            hash[A[i]]=i;
        }
        
        return {0,0};
    }
};

```
