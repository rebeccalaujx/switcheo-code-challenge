var sum_to_n_a = function(n) {
    if (n == 1) {
        return 1
    } else {
        return n + sum_to_n_a(n-1)
    }
};

var sum_to_n_b = function(n) {
    var res = 0
    for (var i = 1; i <= n; i++) {
        res += i
    }
    return res
};

var sum_to_n_c = function(n) {
    return (n / 2) * (1 + n)
};
