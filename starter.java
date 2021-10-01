import java.util.*;
class starter
{	  
	public static void main(String []args)
	{
		Scanner KB = new Scanner(System.in);
		int T=KB.nextInt();
		for(int k=1;k<=T;k++)
		{   
			long N=KB.nextLong();
			long M=KB.nextLong();
			long K=KB.nextLong();
			int poke=0;
			long arr[]= new long[100000000];
			long arrX[]= new long[(int) N];
			for(int j=0;j<N;j++)
			{
				arrX[j]=KB.nextLong();
				if(arr[(int) arrX[j]]<K)
				{
					arr[(int) arrX[j]]++;
				}
				else
				{
					poke=-1;
				}
			}
			long arrY[]= new long[(int) M];
			for(int j=0;j<M;j++)
			{
				arrY[j]=KB.nextLong();
				if(arr[(int) arrY[j]]<K)
				{
					arr[(int) arrY[j]]++;
				}
			}
			
			int sum=0;
			for(int j=0;j<100000000;j++)
			{
				sum=(int) (sum+arr[j]);
			}
			System.out.println(poke);
			
			if(poke==-1)
				System.out.println(0);
			else
				System.out.println(sum);
//			Map<Integer, Integer> mp = new HashMap<>();
//	        for (int i = 0; i < N; i++)
//	        {
//	            if (mp.containsKey(arrX[i])) 
//	            {
//	                mp.put((int) arrX[i], mp.get(arrX[i]) + 1);
//	            } 
//	            else
//	            {
//	                mp.put((int) arrX[i], 1);
//	            }
//	        }
			
			
			
			
			
			
			
			
//			long xx=arrX[0];
//			long yy=arrY[0];
//			for(int j=0;j<K-1;j++)
//			{
//				xx+=Math.abs(arrX[j]-arrX[j+1]);
//				yy+=Math.abs(arrY[j]-arrY[j+1]);
//			}
//			long count=xx+yy;
//
//			if(count<M)
//				System.out.println("YES");
//			else
//				System.out.println("NO");
		}	      
	}
}