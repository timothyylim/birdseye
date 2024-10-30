import Header from '@/components/Header';
import ProfilesTable from '@/components/ProfilesTable';

const profiles = [
  {
    username: "@johndoe",
    status: "Active", 
    followers: "25.0K",
    joinDate: "Jan 2020",
  },
  {
    username: "@janedoe", 
    status: "Inactive",
    followers: "15.0K",
    joinDate: "Mar 2021",
  },
  {
    username: "@techie",
    status: "Active",
    followers: "35.0K", 
    joinDate: "Dec 2019",
  },
  {
    username: "@gamer",
    status: "Active",
    followers: "45.0K",
    joinDate: "Apr 2020",
  },
  {
    username: "@artist",
    status: "Active", 
    followers: "55.0K",
    joinDate: "May 2021",
  },
  {
    username: "@writer",
    status: "Inactive",
    followers: "20.0K",
    joinDate: "Jun 2022",
  },
  {
    username: "@coder",
    status: "Active",
    followers: "30.0K",
    joinDate: "Aug 2021",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">Community Archive Explorer</h1>
          <p className="text-gray-600 text-lg mb-8">Browse and discover community profiles</p>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <ProfilesTable profiles={profiles} />
          </div>

          <p>built with a test runner</p>
        </div>
      </main>
    </div>
  );
}
