export const timelineApi = {
  apiTimelineFieldByFieldIdGet: (): Promise<Array<any>> =>
    new Promise<Array<any>>(resolve =>
      resolve([
        {
          type: 1,
          subType: "PlantProtectionApplicationOfInsecticide",
          date: "2019-08-09T00:00:00",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          fieldId: "d8c0dcbf-985b-448d-95cf-30afc3d071ee",
          fieldName: "Röppentyűi tábla",
          farmingOperationType: 2
        },
        {
          type: 0,
          subType: "ContractStart",
          date: "2019-09-19T00:00:00",
          clientId: "d99b2414-6e20-4a53-b40b-a8a8b7d944e1",
          contractId: "e8fe6199-1c83-430f-aa9f-70f4a3e6a0e6",
          contractNumber: "981234566",
          contractStart: "2019-09-19T00:00:00",
          contractEnd: "2020-01-19T00:00:00",
          businessEventType: 0
        },
        {
          type: 0,
          subType: "ContractStart",
          date: "2019-08-27T00:00:00",
          contractId: "5316eb82-28db-45d9-b83d-4dfa7184af50",
          contractNumber: "65544326",
          contractStart: "2019-08-27T00:00:00",
          contractEnd: "2020-08-27T00:00:00",
          businessEventType: 0
        },
        {
          type: 1,
          subType: "SoilJobInterRow",
          date: "2019-09-01T00:00:00",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          fieldId: "d8c0dcbf-985b-448d-95cf-30afc3d071ee",
          fieldName: "Röppentyűi tábla",
          farmingOperationType: 6
        },
        {
          type: 1,
          subType: "NutrientManagementOperationCompost",
          date: "2019-09-03T00:00:00",
          comment: "próba",
          fieldId: "d8c0dcbf-985b-448d-95cf-30afc3d071ee",
          fieldName: "Röppentyűi tábla",
          farmingOperationType: 18
        },
        {
          type: 1,
          subType: "OtherOperationOther",
          date: "2019-09-04T00:00:00",
          comment: "trixiii",
          fieldId: "d8c0dcbf-985b-448d-95cf-30afc3d071ee",
          fieldName: "Röppentyűi tábla",
          farmingOperationType: 24
        },
        {
          type: 0,
          subType: "ContractStart",
          date: "2019-09-05T00:00:00",
          contractId: "dcb3e605-b6cb-4012-a2c2-3e9582ab6a20",
          contractNumber: "000000",
          contractStart: "2019-09-05T00:00:00",
          contractEnd: "2020-09-05T00:00:00",
          businessEventType: 0
        },
        {
          type: 0,
          subType: "ContractStart",
          date: "2019-09-05T00:00:00",
          contractId: "d6bb5e72-0945-4bb8-bd5c-ffca6df4d544",
          contractNumber: "0101",
          contractStart: "2019-09-05T00:00:00",
          contractEnd: "2020-09-05T00:00:00",
          businessEventType: 0
        },
        {
          type: 1,
          subType: "NutrientManagementOperationFarmyardManure",
          date: "2019-09-05T00:00:00",
          comment: "",
          fieldId: "d8c0dcbf-985b-448d-95cf-30afc3d071ee",
          fieldName: "Röppentyűi tábla",
          farmingOperationType: 14
        },
        {
          type: 1,
          subType: "SoilJobSeedbedPreparation",
          date: "2019-09-05T00:00:00",
          comment: "",
          fieldId: "d8c0dcbf-985b-448d-95cf-30afc3d071ee",
          fieldName: "Röppentyűi tábla",
          farmingOperationType: 5
        },
        {
          type: 1,
          subType: "PlantProtectionApplicationOfHerbicide",
          date: "2019-09-05T00:00:00",
          comment: "",
          fieldId: "d8c0dcbf-985b-448d-95cf-30afc3d071ee",
          fieldName: "Röppentyűi tábla",
          farmingOperationType: 3
        },

        {
          type: 1,
          subType: "PlantProtectionApplicationOfInsecticide",
          date: "2019-09-06T00:00:00",
          comment: "kl",
          fieldId: "d8c0dcbf-985b-448d-95cf-30afc3d071ee",
          fieldName: "Röppentyűi tábla",
          farmingOperationType: 2
        },
        {
          type: 1,
          subType: "SoilJobStubblePlowing",
          date: "2019-09-06T00:00:00",
          comment: "",
          fieldId: "d8c0dcbf-985b-448d-95cf-30afc3d071ee",
          fieldName: "Röppentyűi tábla",
          farmingOperationType: 8
        },
        {
          type: 1,
          subType: "SoilJobStemCrushing",
          date: "2019-09-07T00:00:00",
          comment: "",
          fieldId: "d8c0dcbf-985b-448d-95cf-30afc3d071ee",
          fieldName: "Röppentyűi tábla",
          farmingOperationType: 7
        },
        {
          type: 1,
          subType: "NutrientManagementOperationSolidFertilizer",
          date: "2019-09-11T00:00:00",
          comment: "TESZT",
          fieldId: "d8c0dcbf-985b-448d-95cf-30afc3d071ee",
          fieldName: "Röppentyűi tábla",
          farmingOperationType: 11
        },
        {
          type: 1,
          subType: "SoilJobInterRow",
          date: "2019-09-12T00:00:00",
          comment: "",
          fieldId: "d8c0dcbf-985b-448d-95cf-30afc3d071ee",
          fieldName: "Röppentyűi tábla",
          farmingOperationType: 6
        },
        {
          type: 1,
          subType: "SoilJobStemCrushing",
          date: "2019-09-13T00:00:00",
          comment: "ewrtwtgwrtg",
          fieldId: "d8c0dcbf-985b-448d-95cf-30afc3d071ee",
          fieldName: "Röppentyűi tábla",
          farmingOperationType: 7
        },
        {
          type: 1,
          subType: "PlantProtectionApplicationOfHerbicide",
          date: "2019-09-13T00:00:00",
          comment: "",
          fieldId: "d8c0dcbf-985b-448d-95cf-30afc3d071ee",
          fieldName: "Röppentyűi tábla",
          farmingOperationType: 3
        },
        {
          type: 1,
          subType: "SoilJobGroundLoosening",
          date: "2019-09-14T00:00:00",
          comment: "",
          fieldId: "d8c0dcbf-985b-448d-95cf-30afc3d071ee",
          fieldName: "Röppentyűi tábla",
          farmingOperationType: 9
        },
        {
          type: 0,
          subType: "ContractStart",
          date: "2019-09-27T00:00:00",
          contractId: "b89da103-5ccd-4f2d-bea8-370ea3ccac8d",
          contractNumber: "445678",
          contractStart: "2019-09-27T00:00:00",
          contractEnd: "2020-09-27T00:00:00",
          businessEventType: 0
        },
        {
          type: 1,
          subType: "OtherOperationOther",
          date: "2019-07-10T00:00:00",
          comment: "teszt",
          fieldId: "d8c0dcbf-985b-448d-95cf-30afc3d071ee",
          fieldName: "Röppentyűi tábla",
          farmingOperationType: 24
        },
        {
          type: 0,
          subType: "ContractEnd",
          date: "2020-08-27T00:00:00",
          contractId: "ce8a76e0-9786-47d9-90ca-42fe2a9a1e9a",
          contractNumber: "64543214",
          contractStart: "2019-08-27T00:00:00",
          contractEnd: "2020-08-27T00:00:00",
          businessEventType: 1
        }
      ])
    ),

  apiTimelineEntriesGet: (): Promise<Array<any>> =>
    new Promise<Array<any>>(resolve =>
      resolve([
        {
          businessEventType: 0,
          contractEnd: "2020-07-16T00:00:00",
          contractId: "9a481fcb-6b55-42ca-b04c-e6f9f8db861f",
          contractNumber: "12345678",
          contractStart: "2019-11-16T00:00:00",
          date: "2019-07-16T00:00:00",
          subType: "ContractStart",
          type: 0
        },
        {
          businessEventType: 1,
          contractEnd: "2020-07-16T00:00:00",
          contractId: "9a481fcb-6b55-42ca-b04c-e6f9f8db861f",
          contractNumber: "12345678",
          contractStart: "2019-11-18T00:00:00",
          date: "2020-07-16T00:00:00",
          subType: "ContractEnd",
          type: 0
        },
        {
          comment: "Gombaölőőőő",
          date: "2019-11-13T00:00:00",
          farmingOperationType: 1,
          subType: "PlantProtection_ApplicationOfAntifungalAgent",
          type: 1
        },
        {
          comment: "Szántás",
          date: "2019-11-02T00:00:00",
          farmingOperationType: 10,
          subType: "SoilJob_Ploughing",
          type: 1
        }
      ])
    )
};

export interface TimelineViewModel {
  type: any;
  subType: string;
  date: Date;
  comment: string;
  clientId: string;
  contractId: string;
  contractNumber: string;
  contractStart: Date;
  contractEnd: Date;
  businessEventType: BusinessEventTypeEnum;
  farmingOperationType: FarmingOperationTypeEnum;
}

export enum TypeEnum {
  BusinessEvent = "BusinessEvent" as any,
  FarmingOperation = "FarmingOperation" as any
}
export enum BusinessEventTypeEnum {
  ContractStart = "ContractStart" as any,
  ContractEnd = "ContractEnd" as any
}
export enum FarmingOperationTypeEnum {
  PlantProtectionCombinedTreatment = "PlantProtection_CombinedTreatment" as any,
  PlantProtectionApplicationOfAntifungalAgent = "PlantProtection_ApplicationOfAntifungalAgent" as any,
  PlantProtectionApplicationOfInsecticide = "PlantProtection_ApplicationOfInsecticide" as any,
  PlantProtectionApplicationOfHerbicide = "PlantProtection_ApplicationOfHerbicide" as any,
  SoilJobPlowingWork = "SoilJob_PlowingWork" as any,
  SoilJobSeedbedPreparation = "SoilJob_SeedbedPreparation" as any,
  SoilJobInterRow = "SoilJob_InterRow" as any,
  SoilJobStemCrushing = "SoilJob_StemCrushing" as any,
  SoilJobStubblePlowing = "SoilJob_StubblePlowing" as any,
  SoilJobGroundLoosening = "SoilJob_GroundLoosening" as any,
  SoilJobPloughing = "SoilJob_Ploughing" as any,
  NutrientManagementOperationSolidFertilizer = "NutrientManagementOperation_SolidFertilizer" as any,
  NutrientManagementOperationLiquidFertilizer = "NutrientManagementOperation_LiquidFertilizer" as any,
  NutrientManagementOperationSlurry = "NutrientManagementOperation_Slurry" as any,
  NutrientManagementOperationFarmyardManure = "NutrientManagementOperation_FarmyardManure" as any,
  NutrientManagementOperationMushroomVaccine = "NutrientManagementOperation_MushroomVaccine" as any,
  NutrientManagementOperationBacteriaVaccine = "NutrientManagementOperation_BacteriaVaccine" as any,
  NutrientManagementOperationCompostTea = "NutrientManagementOperation_CompostTea" as any,
  NutrientManagementOperationCompost = "NutrientManagementOperation_Compost" as any,
  NutrientManagementOperationGreeneryFertilizer = "NutrientManagementOperation_GreeneryFertilizer" as any,
  SowingHarvestOperationSowing = "SowingHarvestOperation_Sowing" as any,
  SowingHarvestOperationHarvest = "SowingHarvestOperation_Harvest" as any,
  OtherOperationApplicationOfWildAlarmAgent = "OtherOperation_ApplicationOfWildAlarmAgent" as any,
  OtherOperationRipeningAcceleratorApplication = "OtherOperation_RipeningAcceleratorApplication" as any,
  OtherOperationOther = "OtherOperation_Other" as any
}
