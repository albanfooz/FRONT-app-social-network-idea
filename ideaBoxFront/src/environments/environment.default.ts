interface IEnvironment {
  profile: Profile;
  url: string;
}

enum Profile {
  Dev,
  Test,
  Recette,
  Prod,
}
