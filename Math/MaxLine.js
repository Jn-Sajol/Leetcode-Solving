/**
 * @param {number[][]} points
 * @return {number}
 */

// author : Sourav Kumar Dubey
// My 1st submission in JavaScript! Enjoyed it!!!!
var maxPoints = function(points) {
    
    let maxi = 0;
    
    for ( let i = 0; i < points.length; i++ ) {
        
        const mp = new Map();
        const [x1, y1] = [...points[i]]; // ... JS spread operator
        let currMax = 1, slope = 0;

        for ( let j = i + 1; j < points.length; j++ ) { 
            
            const [x2, y2] = [...points[j]];
            
            if ( x1 === x2 ) slope = Number.MAX_VALUE; // if the denominator is 0, then the slope will become infinity
            else slope = (y2 - y1) / (x2 - x1);
            
            if ( !mp.has(slope) ) mp.set(slope, 2); // 2 coz we have got the new slope using 2 points.
            else mp.set(slope, mp.get(slope) + 1); // if slope already exits then just increment the number of frequencies
            
            currMax = Math.max(currMax, mp.get(slope));

        }
        
        maxi = Math.max(maxi, currMax);
        
    }

    return maxi;

};
    
    maxPoints();