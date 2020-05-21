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
