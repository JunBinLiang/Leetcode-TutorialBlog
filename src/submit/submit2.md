
class Solution {
	public static void main(String[] args){
		Main sol=new Main();
		List<Boolean>list=new ArrayList<>();
		
		
		
		
		try{
			int ans1=sol.presentFrom66(3,6,9,24);
			int ans2=sol.presentFrom66(3,6,4,36);
			int ans3=sol.presentFrom66(11,5,20,1000);
			int ans4=sol.presentFrom66(3,3,3,40);
			int ans5=sol.presentFrom66(6,1,9,150);
			int ans6=sol.presentFrom66(3,2,1,200);
			list.add(ans1==5);
			list.add(ans2==7);
			list.add(ans3==52);
			list.add(ans4==9);
			list.add(ans5==20);
			list.add(ans6==30);
			
			for(boolean a:list){
				System.out.println(a);
			}
		}
		
		catch(Exception e){
			e.printStackTrace();
		}
		
	}
}

