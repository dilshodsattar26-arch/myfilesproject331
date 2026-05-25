const coreModelInstance = {
    version: "1.0.331",
    registry: [1443, 1276, 1606, 588, 367, 1430, 1342, 405],
    init: function() {
        const nodes = this.registry.filter(x => x > 36);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreModelInstance.init();
});