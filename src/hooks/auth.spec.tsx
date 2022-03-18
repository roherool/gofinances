import { renderHook, act } from "@testing-library/react-hooks";
import { mocked } from "ts-jest/utils";
import * as AuthSession from "expo-auth-session";

import { AuthProvider, useAuth } from "./auth";

jest.mock("expo-google-app-auth");

describe("Auth Hook", () => {
  it("should be able to sign in with Google account existing", async () => {
    const googleMocked = mocked(AuthSession as any);
    googleMocked.mockReturnValueOnce({
      type: "success",
      user: {
        id: "any_id",
        email: "john.doe@email.com",
        name: "John Doe",
        photo: "any_photo_png",
      },
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user.email).toBe("john.doe@email.com");
  });

  it("should user not connect if cancel authentication with Google", async () => {
    const googleMocked = mocked(AuthSession as any);
    googleMocked.mockReturnValueOnce({
      type: "cancel",
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user).not.toHaveProperty("id");
  });

  it("should be error with incorrectly Google parameters", async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    try {
      await act(() => result.current.signInWithGoogle());
    } catch {
      expect(result.current.user).toThrowError();
    }
  });
});
