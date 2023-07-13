
        let firstBadVersion =( n) =>{
            let start=1
            let end=n;
            while(start<=end){
                let mid=start+(end-start)/2;
    
                if(isBadVersion(mid)){
                    end=mid-1;
                }
                else if(!isBadVersion(mid)){
                     start=mid+1;
                }
            }
            return start;
        }
        let isBadVersion =(version) => {
            
             };