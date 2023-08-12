/**
 * @param {string} expression
 * @return {boolean}
 */
function parseBoolExpr(expr) {
    if (expr === 'f') return false;
    if (expr === 't') return true;

    expr = lexing(expr);
    if (expr[0] == '&') {
        for (let i = 1; i < expr.length; i++) {
            expr[i] = parseBoolExpr(expr[i]);
            if (!expr[i]) return false;
        }
        return true;
    } else if (expr[0] === '|') {
        for (let i = 1; i < expr.length; i++) {
            expr[i] = parseBoolExpr(expr[i]);
            if (expr[i]) return true;
        }
        return false;
    } else { // if (expr[0] === '!')
        return !(parseBoolExpr(expr[1]))
    }
}

function lexing(expr) {

    const res = [];
    if (expr[0] === '&' || expr[0] === '|' || expr[0] === '!') res.push(expr[0]);

    let lastPos = 1;
    let leftBracket = -1;
    for (let i = 1; i < expr.length; i++) {
        if (expr[i] === '(') {
            leftBracket++;
            if (leftBracket > 0) {
                lastPos = i-1;

                while(++i < expr.length && leftBracket > 0) {
                    if (expr[i] === '(') leftBracket++;
                    if (expr[i] === ')') leftBracket--;
                }
                res.push(expr.slice(lastPos, i));
                lastPos = i;
            } 
        } else if (expr[i] === ',') {
            res.push(expr.slice(lastPos+1, i));
            lastPos = i;
        } else if (expr[i] === ')') {
            res.push(expr.slice(lastPos+1, i));
            lastPos = i;
        }
    }
    return res;
}

parseBoolExpr();