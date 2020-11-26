import sys
def pattern():
    a=int(input())
    for i in range(0,a,1):
        
        if i==0 or i==a-1:
            for j in range(a):
                sys.stdout.write("#")
        else:
            for k in range(0,a,1):
                if k==0 or k==a-1:
                    
                    sys.stdout.write("*")
                else:
                    sys.stdout.write(" ")
        sys.stdout.write('\n')
                  
         
if __name__=="__main__":
    pattern()           