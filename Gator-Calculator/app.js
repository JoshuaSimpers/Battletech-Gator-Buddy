const calculateButton = document.getElementById("calculate");
const otherModifierSelector = document.getElementById("tileYN");
const lightTerrainModifierListElement = document.getElementById("terrainModifierLight");
const heavyTerrainModifierListElement = document.getElementById("terrainModifierHeavy");
const lightTerrainModifierElement = document.getElementById("lightTerrainNum");
const heavyTerrainModifierElement = document.getElementById("heavyTerrainNum");
otherModifierSelector.addEventListener("change", setTerrainModifierVisibility);
calculateButton.addEventListener("click", gatorCalculation);

const gatorValueOutputElement = document.getElementById("output");

function gatorCalculation()
{
    let gatorValue = 0;

    let gunnerySkillElement = document.getElementById("skill");
    let attackerMovementModifierElement = document.getElementById("attackerMovement");
    let opponentMovementModifierElement = document.getElementById("opponentMovement");
    let lightTerrainModifierElement = document.getElementById("lightTerrainNum");
    let heavyTerrainModifierElement = document.getElementById("heavyTerrainNum");
    let rangeModifierElement = document.getElementById("weaponRange");

    let gunnerySkillValue = +gunnerySkillElement.value;
    let attackerMovementModifierValue = +attackerMovementModifierElement.value;
    let opponentMovementModifierValue = targetMovementModiferCalculation(+opponentMovementModifierElement.value);
    let lightTerrainModifierValue = +lightTerrainModifierElement.value;
    let heavyTerrainModifierValue = +heavyTerrainModifierElement.value;
    let otherModifiers = (lightTerrainModifierValue + (heavyTerrainModifierValue * 2));
    let rangeModifierValue = +rangeModifierElement.value;

    console.log("Gunnery Skill Value: " + gunnerySkillValue);
    console.log("Attacker Movement Value: " + attackerMovementModifierValue);
    console.log("Target Movement Value: " + opponentMovementModifierValue);
    console.log("Other Values: " + otherModifiers);
    console.log("Range Value: " + rangeModifierValue);

    gatorValue = (gunnerySkillValue + attackerMovementModifierValue + opponentMovementModifierValue + otherModifiers + rangeModifierValue);
    if (gatorValue <= 6)
    {
        gatorValueOutputElement.style.color = "lime";
    }
    if (gatorValue > 6 && gatorValue <= 9)
    {
        gatorValueOutputElement.style.color = "yellow";
    }
    if (gatorValue > 9)
    {
        gatorValueOutputElement.style.color = "red";
    }
    gatorValueOutputElement.textContent = gatorValue;
}

function targetMovementModiferCalculation(hexNumber)
{
    modifierValue = 0;
    jumpingValue = 0;

    let attackerMovementModifierElement = document.getElementById("attackerMovement");
    let attackerMovementModifierValue = +attackerMovementModifierElement.value;

    if (attackerMovementModifierValue === 3)
    {
        jumpingValue = 1;
    }
    else
    {
        jumpingValue = 0;
    }
    if (hexNumber <= 2)
    {
        modifierValue = 0 + jumpingValue;
    }
    else if (hexNumber > 2 && hexNumber <= 4)
    {
        modifierValue = 1 + jumpingValue;
    }
    else if (hexNumber >= 5 && hexNumber <= 6)
    {
        modifierValue = 2 + jumpingValue;
    }
    else if (hexNumber >= 7 && hexNumber <= 9)
    {
        modifierValue = 3 + jumpingValue;
    }
    else if (hexNumber <= 10)
    {
        modifierValue = 4 + jumpingValue;
    }
    return modifierValue;
}

function setTerrainModifierVisibility()
{
    const otherModifierSelectorValue = +(otherModifierSelector.value);
    console.log(otherModifierSelectorValue);
    if (otherModifierSelectorValue === 1)
    {
        lightTerrainModifierListElement.className = "visible";
        heavyTerrainModifierListElement.className = "visible";
    }
    else if (otherModifierSelectorValue === 0)
    {
        lightTerrainModifierListElement.className = "hidden";
        heavyTerrainModifierListElement.className = "hidden";
        lightTerrainModifierElement.value = 0;
        heavyTerrainModifierElement.value = 0;
    }
}