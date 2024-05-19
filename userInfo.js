function createUserProfiles(originalNames, modifiedNames) {
    var new_profiles = [];

    for (let i = 0; i < originalNames.length; i++) {
        var profile = {};

        if (i >= 0) {
            profile.id = i + 1;
        }

        if (originalNames[i]) {
            profile.originalName = originalNames[i];
        }

        if (modifiedNames[i]) {
            profile.modifiedName = modifiedNames[i];
        }

        new_profiles.push(profile);
    }

    return new_profiles;
}

var originalNames = ["kofi", "ama", "yaw"];
var modifiedNames = ["Kofi", "Ama", "Yaw"];

var new_profile = createUserProfiles(originalNames, modifiedNames);
console.log(new_profile);
