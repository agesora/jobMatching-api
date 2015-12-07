var jobMatching = require('node-jobmatch');
var rule = new jobMatching.Rule(false);
rule.use('person_info', 'person_info', 3, function (j, r, cache) {
    var determine = [
        r.sex == "all" || j.sex == r.sex,
        r.age[0] ? j.age >= r.age[0] : true && r.age[1] ? j.age <= r.age[1] : true,
        r.degree[0] ? j.degree >= r.degree[0] : true && r.degree[1] ? j.degree <= r.degree[1] : true
    ];
    for (var d of determine) {
        if (!d) return {
            mark: 0,
            tonext: 'go'
        };
    }
    return {
        mark: 3,
        tonext: 'break'
    };
});
rule.use('ability', 'ability', null, function (j, r, cache) {
    var determine = [
        j.aname == r.aname,
        j.value >= r.value,
    ];
    if (r.need == 1 && !cache.has(r)) {
        cache.set(r, false);
    }
    for (var d of determine) {
        if (!d) return {
            mark: 0,
            tonext: 'go'
        };
    }
    cache.set(r, true);
    return {
        mark: 5,
        tonext: 'go'
    };
}, function (mark, cache) {
    for (var res of cache) {
        if (!res[1]) {
            mark.get = 0;
        }
    }
    return true;
});
//简历
module.exports = function (j, r, callback) {
    jobMatching.match({
        job_hunter: j,
        recruitments: r,
        rule: rule
    }).addup().exec(function (err, result) {
        callback(err, result);
    });
}
