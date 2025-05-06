type Status = "success" | "error" | "loading" | "idle";

type ActiveStatus = Exclude<Status, "loading" | "idle">;
// "success" | "error"

type FeatureFlags = "beta" | "darkMode" | "notifications" | "deprecatedFeature";

type ActiveFeatureFlags = Exclude<FeatureFlags, "deprecatedFeature">;