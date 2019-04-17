export interface GithubUser {
  id: string;
  userName: string;
  fullName?: string;
  profileUrl: string;
  email?: string;
  bio?: string;
  location?: string;
  avatarUrl?: string;
  createdAt: string;
  followerCount: number;
  repoCount: number;
  starCount: number;
}

export let mockGithubUser: GithubUser = {
  id: 'asdfasdasdfMw==',
  userName: 'mockusername',
  fullName: 'Mock User',
  profileUrl: 'https://github.com/mockuser',
  email: 'mock@user.com',
  bio: 'I am a mock user 🤖',
  location: 'Little Rock, Arkansas',
  createdAt: 'Wed Apr 17 2019 12:09:29 GMT-0400 (Eastern Daylight Time)',
  followerCount: 100,
  repoCount: 50,
  starCount: 200
};
