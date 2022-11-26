import prisma from '../../lib/prisma';
import { validateRoute } from '../../lib/auth';

export default validateRoute(async (req, res, user) => {
  const playlistCount = await prisma.playlist.count({
    where: {
      userId: user.id
    }
  });

  res.json({
    ...user,
    playlistCount
  });
});
