import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Profile {
  username: string;
  status: string;
  followers: string;
  joinDate: string;
}

interface ProfilesTableProps {
  profiles: Profile[];
}

export default function ProfilesTable({ profiles }: ProfilesTableProps) {
  const totalFollowers = profiles
    .reduce((sum, profile) => sum + parseFloat(profile.followers.replace('K', '')), 0)
    .toFixed(1);

  return (
    <Table>
      <TableCaption>Community Archive Profiles</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Username</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Join Date</TableHead>
          <TableHead className="text-right">Followers</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {profiles.map((profile) => (
          <TableRow key={profile.username}>
            <TableCell className="font-medium">{profile.username}</TableCell>
            <TableCell>{profile.status}</TableCell>
            <TableCell>{profile.joinDate}</TableCell>
            <TableCell className="text-right">{profile.followers}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Followers</TableCell>
          <TableCell className="text-right">{totalFollowers}K</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}