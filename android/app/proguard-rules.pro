# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:
-keep class com.hianalytics.android.**{*;}
-keep class com.huawei.updatesdk.**{*;}
-keep class com.huawei.hms.**{*;}
-keep interface com.huawei.hms.analytics.type.HAEventType{*;}
-keep interface com.huawei.hms.analytics.type.HAParamType{*;}
-keep class com.huawei.hianalytics.CommonUtil{*;}
-keep class com.huawei.hianalytics.HaInterfaceModule{*;}
-keep class com.huawei.hianalytics.HaInterfacePackage{*;}
-keep class com.huawei.hianalytics.HaSdkInitProvider{*;}
-keep class com.huawei.hianalytics.LifeCycleListener{*;}