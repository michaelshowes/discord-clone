import InitialModal from '@components/modals/initial-modal';
import { db } from '@lib/db';
import { initialProfile } from '@lib/initial-profile';
import { redirect } from 'next/navigation';

type Props = {};
export default async function SetupPage({}: Props) {
	const profile = await initialProfile();

	const server = await db.server.findFirst({
		where: {
			members: {
				some: {
					id: profile.id
				}
			}
		}
	});

	if (server) {
		return redirect(`/servers/${server.id}`);
	}

	return (
		<div>
			<InitialModal />
		</div>
	);
}
