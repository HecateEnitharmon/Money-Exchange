module.exports = function makeExchange(currency) {
    var nominal = [{"H": 50}, {"Q": 25}, {"D": 10}, {"N": 5}, {"P": 1}];
    var rest = currency;
    var change = {};
    if (currency >= 10000) {
        change['error'] = "You are rich, my friend! We don't have so much coins for exchange";
    } else {
        for (var i = 0; i < nominal.length; i++) {
            if (rest >= Object.values(nominal[i])) {
                var coin = Object.keys(nominal[i]);
                var value = Math.floor(rest / Object.values(nominal[i]));
                change[coin] = value;
                rest = rest - Object.values(nominal[i]) * value;
            }
        }
    }
    return change;
};