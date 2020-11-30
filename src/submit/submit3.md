
class Solution {
	public static void main(String[] args){
		Main sol=new Main();
		List<Boolean>list=new ArrayList<>();
		
		
		
		
		try{
			int ans1=sol.smart66Bro(8,11);
			int ans2=sol.smart66Bro(20,30);
			int ans3=sol.smart66Bro(1000,2000);
			int ans4=sol.smart66Bro(12596,2333334);
			int ans5=sol.smart66Bro(12345678,87654321);
			int ans6=sol.smart66Bro(0,0);
			list.add(ans1==6);
			list.add(ans2==9);
			list.add(ans3==77);
			list.add(ans4==2165);
			list.add(ans5==14141);
			list.add(ans6==1);
			
			for(boolean a:list){
				System.out.println(a);
			}
		}
		
		catch(Exception e){
			e.printStackTrace();
		}
		
	}
}

