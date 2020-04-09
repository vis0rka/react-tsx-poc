import moment from "moment";

export const Options = {
  width: "100%",
  height: "300px",
  selectable: false,
  format: {
    minorLabels: {
      millisecond: "SSS",
      second: "s",
      minute: "HH:mm",
      hour: "HH:mm",
      weekday: "dddd D.",
      day: "MM. DD.",
      week: "MMM",
      month: "MMM",
      year: "YYYY"
    }
  },
  tooltip: {
    delay: 100
  },
  zoomMin: 3600000,
  moment: (date: Date) => {
    return moment(date).locale("hu");
  },
  locale: "hu",
  locales: {
    hu: {
      current: "jelenlegi",
      time: "idő"
    }
  }
};

interface IDictionary {
  [details: string]: string;
}

export const jobTypesTranslation: IDictionary = {
  ContractStart: "Szerződés kezdete",
  ContractEnd: "Szerződés vége",
  PlantProtectionCombinedTreatment: "Kombinált kezelés",
  PlantProtectionApplicationOfAntifungalAgent: "Gombaölő szer kijuttatása",
  PlantProtectionApplicationOfInsecticide: "Rovarölő szer kijuttatása",
  PlantProtectionApplicationOfHerbicide: "Gyomirtó szer kijuttatása",
  SoilJobPlowingWork: "Szántás elmunkálás",
  SoilJobSeedbedPreparation: "Magágy készítés",
  SoilJobInterRow: "Sorközművelés",
  SoilJobStemCrushing: "Szárzúzás",
  SoilJobStubblePlowing: "Tarlóhántás",
  SoilJobGroundLoosening: "Lazítás",
  SoilJobPloughing: "Szántás",
  NutrientManagementOperationSolidFertilizer: "Szilárd műtrágya",
  NutrientManagementOperationLiquidFertilizer: "Folyékony műtrágya",
  NutrientManagementOperationSlurry: "Hígtrágya",
  NutrientManagementOperationFarmyardManure: "Istállótrágya",
  NutrientManagementOperationMushroomVaccine: "Gomba oltóanyag",
  NutrientManagementOperationBacteriaVaccine: "Baktérium oltóanyag",
  NutrientManagementOperationCompostTea: "Komposzt tea",
  NutrientManagementOperationCompost: "Komposzt",
  NutrientManagementOperationGreeneryFertilizer: "Lombtrágya",
  SowingHarvestOperationSowing: "Vetés",
  SowingHarvestOperationHarvest: "Aratás",
  OtherOperationApplicationOfWildAlarmAgent: "Vadriasztó szer kijuttatása",
  OtherOperationRipeningAcceleratorApplication: "Érés gyorsító kijuttatása",
  OtherOperationOther: "Egyéb"
};
