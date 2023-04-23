export const Config = {
  linkedInConfig: {
    CLIENT_ID: "777ho87n92glc3",
    CLIENT_SECERT: "PeRFLEhzmdD039nn",
    CALLBACK_URL: process.env.Base_URL + "/core/auth/linkedin/callback",
  },
  encryption: {
    jwt_secret: "qube$%$AI*&&*20BC",
  },
  TOKEN_SECRET: "VGhlYm94UG9ydHFpaTIwMjJUT0tFTl9TRUNSRVQ=",
  emailFrom: "support@portqii.com",
  supportPassword: "crmSci123!@#",
  baseURL: process.env.Base_URL,
  defaultVendorLogo: "https://cruxstack.com/assets/images/CompanyLogoPlaceholder.png",
  microServices: {
    search: "https://thebox-dev.portqii.com/search",
    feed: "https://thebox-dev.portqii.com/feed_backend",
    NLP: "https://thebox-dev.portqii.com/NLP",
    core: "https://thebox-dev.portqii.com/core",
    engagement: "https://thebox-dev.portqii.com/engagement",
    recommendation: "https://thebox-dev.portqii.com/recommendation",
    scraping: "https://thebox-dev.portqii.com/scraping",
    communication: "https://thebox-dev.portqii.com/communication_backend",
  },
  boardStatus: {
    close: "Closed",
    new: "Draft",
    update: "Publish",
  },
  kafkaDetails: {
    clientID: "simple-producer-consumer-application_1",
    kafkaBrokerIPString1: "35.166.140.107:9092",
    NLPToProcessTopic: "NLP-TO-PROCESS",
    UserSignalTopic: "USER-SIGNAL-TOPIC",
    FollowSignalTopic: "FOLLOW-SIGNAL-TOPIC",
    EventToProcess: "NEW-EVENT-SIGNAL",
  },
  folderDetails: {
    limit: 30,
  },
  limit: {
    getAllUserBoards: 10,
    userProfileBoardBlurbs: 30,
  },
  imageUrl: "https://thebox-dev.portqii.com/images/",
  boardDefaultprivacy: "Private",
  awsDefaults: {
    bucketName: "thebox-images",
    profileIcons: "thebox-images-1",
  },
  defaultProfileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  Limits: {
    getList: 1000,
  },
};
