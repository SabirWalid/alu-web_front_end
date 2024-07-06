// Module studentHogwarts
const studentHogwarts = (function() {
    // Private variables
    let privateScore = 0;
    let name = null;

    // Private method
    function changeScoreBy(points) {
        privateScore += points;
    }

    // Public methods exposed in the returned object
    return {
        setName: function(newName) {
            name = newName;
        },
        rewardStudent: function() {
            changeScoreBy(1);
        },
        penalizeStudent: function() {
            changeScoreBy(-1);
        },
        getScore: function() {
            return `${name}: ${privateScore}`;
        },
    };
})();

// Instances of studentHogwarts
const harry = Object.create(studentHogwarts);
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore()); // Should log

const draco = Object.create(studentHogwarts);
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());