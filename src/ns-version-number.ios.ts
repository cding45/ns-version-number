export class VersionNumber {
    get() {
        var version = NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleShortVersionString");
        return "Version ==== " + version;
    }
}