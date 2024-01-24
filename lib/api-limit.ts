import { auth } from "@clerk/nextjs";
import prismadb from "./prismadb";
import { MAX_FREE_COUNT } from "@/constants";

export const increaseApiLimit = async (apiName: string) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return;
    }

    const userApiLimit = await prismadb.userApiLimit.findUnique({
      where: {
        userId,
      },
    });

    if (userApiLimit) {
      await prismadb.userApiLimit.update({
        where: {
          userId,
        },
        data: {
          count: userApiLimit.count + 1,
        },
      });
    } else {
      await prismadb.userApiLimit.create({
        data: {
          userId,
          apiName,
          count: 1,
        },
      });
    }
  } catch (e) {}
};

export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNT) {
    return true;
  } else {
    return false;
  }
};

export const getApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return 0;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimit) {
    return 0;
  }
  return userApiLimit.count;
};
