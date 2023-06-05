function solution(common) {
    var length = common.length;
    
    if (common[1] - common[0] === common[length - 1] - common[length - 2]) {
        // 등차수열
        return common[length - 1] + (common[1] - common[0]);
    } else if (common[1] / common[0] === common[length - 1] / common[length - 2]) {
        // 등비수열
        return common[length - 1] * (common[1] / common[0]);
    } else {
        // 등차수열도 등비수열도 아닐 때 
        return common[length - 1];
    }
}