@ECHO OFF
REG QUERY "HKU\S-1-5-19">NUL 2>&1 || (
reg add "HKCU\SOFTWARE\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers" /f /v "%~dp0Program\Thunder.exe" /d "~ RUNASADMIN" >NUL 2>NUL
)
REG QUERY "HKU\S-1-5-19">NUL 2>&1 || (powershell -Command "Start-Process '%~sdpnx0' -Verb RunAs"&&EXIT)

ver|findstr "5\.[0-9]\.[0-9][0-9]*" > NUL && (
ECHO.&ECHO ��ǰ�汾��֧��WinXP &PAUSE>NUL&EXIT)

taskkill /f /im XMP.exe >NUL 2>NUL
taskkill /f /im XLLiveUD* >NUL 2>NUL
taskkill /f /im Thunder* /T >NUL 2>NUL
taskkill /f /im xlbrowsershell* >NUL 2>NUL
taskkill /f /im DownloadSDKServer* >NUL 2>NUL

::ɾ����ز����ļ�
rd/s/q "%TEMP%\Xmp"2>NUL
rd/s/q "%TEMP%\xlwfp"2>NUL
rd/s/q "%TEMP%\Xunlei"2>NUL
rd/s/q "%TEMP%\Thunder"2>NUL
rd/s/q "%TEMP%\XLLiveUD"2>NUL
rd/s/q "%TEMP%\XLNonIESvr"2>NUL
rd/s/q "%TEMP%\ThunderLiveUD"2>NUL
rd/s/q "%TEMP%\ThunderInstall"2>NUL
rd/s/q "%TEMP%\Thunder Network"2>NUL
rd/s/q "%AppData%\Ѹ��" 2>NUL
rd/s/q "%AppData%\Ѹ��X" 2>NUL
rd/s/q "%AppData%\Ѹ��11" 2>NUL
rd/s/q "%AppData%\thunder"2>NUL
rd/s/q "%AppData%\thunderx"2>NUL
rd/s/q "%AppData%\XLGameBox"2>NUL
rd/s/q "%AppData%\Ѹ�ײ������" 2>NUL
rd/s/q "%AppData%\Thunder Network"2>NUL
rd/s/q "%ProgramData%\USOShared"2>NUL
rd/s/q "%ProgramData%\USOPrivate"2>NUL
rd/s/q "%ProgramData%\Thunder Network"2>NUL
rd/s/q "%PUBLIC%\Documents\Thunder Network"2>NUL
rd/s/q "%CommonProgramW6432%\Thunder Network"2>NUL
del/q "%ProgramData%\APlayerCodecs3.exe" >NUL 2>NUL
rd/s/q "%CommonProgramFiles(x86)%\Thunder Network"2>NUL
rd/s/q "%UserProfile%\AppData\LocalLow\XunLei"2>NUL
rd/s/q "%UserProfile%\AppData\LocalLow\XunleiBHO"2>NUL
del/q "%UserProfile%\AppData\APlayerCodecs3.exe" >NUL 2>NUL
rd/s/q "%UserProfile%\AppData\LocalLow\Thunder Network"2>NUL
del/q "%AppData%\Microsoft\Windows\Libraries\Ѹ������.library-ms" >NUL 2>NUL

::�������ǽ��վ����
netsh advfirewall firewall add rule name="Thunder" dir=in action=allow program="%~dp0Program\Thunder.exe" >NUL 2>NUL 
netsh advfirewall firewall add rule name="DownloadSDKServer" dir=in action=allow program="%~dp0Program\resources\bin\SDK\DownloadSDKServer.exe" >NUL 2>NUL

::��ֹ��̨P2P͵͵�ϴ�
rd/s/q "%PUBLIC%\Thunder Network"2>NUL
md "%PUBLIC%\Thunder Network\cid_store.dat" 2>NUL
md "%PUBLIC%\Thunder Network\tp_common_info.dat" 2>NUL
md "%PUBLIC%\Thunder Network\emule_upload_list.dat" 2>NUL

::Ѹ������λ�ü����
IF NOT EXIST "%ProgramW6432%" (
reg add "HKLM\SOFTWARE\Thunder Network\ThunderOem\thunder_backwnd" /f /v "dir" /d "%~dp0\" >NUL 2>NUL
reg add "HKLM\SOFTWARE\Thunder Network\ThunderOem\thunder_backwnd" /f /v "instdir" /d "%~dp0\" >NUL 2>NUL
reg add "HKLM\SOFTWARE\Thunder Network\ThunderOem\thunder_backwnd" /f /v "Path" /d "%~dp0Program\Thunder.exe" >NUL 2>NUL 
) ELSE (
reg add "HKLM\SOFTWARE\Thunder Network\ThunderOem\thunder_backwnd" /f /v "dir" /d "%~dp0\" /reg:32 >NUL 2>NUL
reg add "HKLM\SOFTWARE\Thunder Network\ThunderOem\thunder_backwnd" /f /v "instdir" /d "%~dp0\" /reg:32 >NUL 2>NUL
reg add "HKLM\SOFTWARE\Thunder Network\ThunderOem\thunder_backwnd" /f /v "Path" /d "%~dp0Program\Thunder.exe" /reg:32 >NUL 2>NUL
)

::ע��IE����������IE�ں˳���������
regsvr32 /s "%~dp0BHO\ThunderAgent.dll"
regsvr32 /s "%~dp0BHO\ThunderAgent64.dll"
regsvr32 /s "%~dp0Program\np_tdieplat.dll"
reg add "HKCU\Software\Thunder Network\BHOEnum" /f /v "Thunder7" /d "%~dp0BHO\" >NUL 2>NUL

::Ѹ�ײ��������ؼ�ֵ
reg add "HKCU\SOFTWARE\Thunder Network\Xmp" /f /v "XmpCodecsState" /t REG_DWORD /d "4" >NUL 2>NUL
reg add "HKCU\SOFTWARE\Thunder Network\APlayer" /f /v "XmpCodecsState" /t REG_DWORD /d "4" >NUL 2>NUL
reg add "HKCU\SOFTWARE\Thunder Network\APlayer" /f /v "XmpCodecsUpdateState" /t REG_DWORD /d "4" >NUL 2>NUL

::Chrme, firefox��չ���ʶ��·����ֵ��
reg delete "HKLM\SOFTWARE\Google\Chrome\NativeMessagingHosts\com.xunlei.thunder" /f /reg:32 >NUL 2>NUL
reg add "HKLM\SOFTWARE\Google\Chrome\NativeMessagingHosts\com.xunlei.thunder" /f /ve /d "%~dp0Program\com.xunlei.thunder.json" >NUL 2>NUL
IF NOT EXIST "%ProgramW6432%" (
reg add "HKLM\SOFTWARE\MozillaPlugins\@xunlei.com/npxunlei;version=1.0.0.2" /f /v "path" /d "%~dp0Program\npxunlei.dll" >NUL 2>NUL
) ELSE (
reg add "HKLM\SOFTWARE\MozillaPlugins\@xunlei.com/npxunlei;version=1.0.0.2" /f /v "path" /d "%~dp0Program\npxunlei.dll" /reg:32 >NUL 2>NUL
)

::�����ҳ�Ҽ��˵�������
reg add "HKCU\SOFTWARE\Microsoft\Internet Explorer\MenuExt\&ʹ��&Ѹ����������" /f /ve /d "%~dp0BHO\OfflineDownload.htm" >NUL 2>NUL
reg add "HKCU\SOFTWARE\Microsoft\Internet Explorer\MenuExt\&ʹ��&Ѹ����������" /f /v "Contexts" /t REG_DWORD /d "34" >NUL 2>NUL
reg add "HKCU\SOFTWARE\Microsoft\Internet Explorer\MenuExt\&ʹ��&Ѹ����������" /f /v "Name" /d "xl_offlinedownload" >NUL 2>NUL
reg add "HKCU\SOFTWARE\Microsoft\Internet Explorer\MenuExt\&ʹ��&Ѹ������" /f /ve /d "%~dp0BHO\geturl.htm" >NUL 2>NUL
reg add "HKCU\SOFTWARE\Microsoft\Internet Explorer\MenuExt\&ʹ��&Ѹ������" /f /v "Contexts" /t REG_DWORD /d "34" >NUL 2>NUL
reg add "HKCU\SOFTWARE\Microsoft\Internet Explorer\MenuExt\&ʹ��&Ѹ������" /f /v "Name" /d "xl_geturl" >NUL 2>NUL
reg add "HKCU\SOFTWARE\Microsoft\Internet Explorer\MenuExt\&ʹ��&Ѹ������ȫ������" /f /ve /d "%~dp0BHO\GetAllUrl.htm" >NUL 2>NUL
reg add "HKCU\SOFTWARE\Microsoft\Internet Explorer\MenuExt\&ʹ��&Ѹ������ȫ������" /f /v "Contexts" /t REG_DWORD /d "243" >NUL 2>NUL
reg add "HKCU\SOFTWARE\Microsoft\Internet Explorer\MenuExt\&ʹ��&Ѹ������ȫ������" /f /v "Name" /d "xl_getallurl" >NUL 2>NUL

::������ص��ļ�����Э��

reg add "HKCR\.downlist" /f /ve /d "Xunlei.LSTFile.6" >NUL 2>NUL
reg add "HKCR\.td" /f /ve /d "Xunlei.TDFile.6" >NUL 2>NUL
reg add "HKCR\.thunderskin" /f /ve /d "Xunlei.ThunderSkin.6" >NUL 2>NUL
reg add "HKCR\.torrent" /f /ve /d "Xunlei.Bittorrent.6" >NUL 2>NUL
reg add "HKCR\.xlb" /f /ve /d "Xunlei.XLB.6" >NUL 2>NUL
reg add "HKCR\.xltd" /f /ve /d "Xunlei.TDFile.6" >NUL 2>NUL
reg add "HKCR\ed2k" /f /v "URL Protocol" /d "" >NUL 2>NUL
reg add "HKCR\ed2k\Shell\Open\command" /f /ve /d "\"%~dp0Program\Thunder.exe\" \"%%1\" -StartType:ed2k" >NUL 2>NUL
reg add "HKCR\magnet" /f /v "URL Protocol" /d "" >NUL 2>NUL
reg add "HKCR\magnet\Shell\Open\command" /f /ve /d "\"%~dp0Program\Thunder.exe\" \"%%1\" -StartType:magnet" >NUL 2>NUL
reg add "HKCR\thunder" /f /v "URL Protocol" /d "" >NUL 2>NUL
reg add "HKCR\thunder\Shell\Open\command" /f /ve /d "\"%~dp0Program\Thunder.exe\" \"%%1\" -StartType:thunder" >NUL 2>NUL
reg add "HKCR\thunderx" /f /v "URL Protocol" /d "" >NUL 2>NUL
reg add "HKCR\thunderx\Shell\Open\command" /f /ve /d "\"%~dp0Program\Thunder.exe\" \"%%1\" -StartType:thunderx" >NUL 2>NUL
reg add "HKCR\xlb" /f /v "URL Protocol" /d "" >NUL 2>NUL
reg add "HKCR\xlb\Shell\Open\command" /f /ve /d "\"%~dp0Program\Thunder.exe\" \"%%1\" -StartType:xlb" >NUL 2>NUL
reg add "HKCR\Xunlei.Bittorrent.6" /f /ve /d "BT�����ļ�" >NUL 2>NUL
reg add "HKCR\Xunlei.Bittorrent.6\DefaultIcon" /f /ve /d "%~dp0Program\TorrentFile.ico" >NUL 2>NUL
reg add "HKCR\Xunlei.Bittorrent.6\Shell\Open" /f /ve /d "ʹ��Ѹ�����ظ�BT�ļ�" >NUL 2>NUL
reg add "HKCR\Xunlei.Bittorrent.6\Shell\Open\command" /f /ve /d "\"%~dp0Program\Thunder.exe\" \"%%1\"" >NUL 2>NUL
reg add "HKCR\Xunlei.LSTFile.6" /f /ve /d "Ѹ��ר�������ļ�" >NUL 2>NUL
reg add "HKCR\Xunlei.LSTFile.6\DefaultIcon" /f /ve /d "%~dp0Program\XLDownloadList.ico" >NUL 2>NUL
reg add "HKCR\Xunlei.LSTFile.6\Shell\Open" /f /ve /d "ʹ��Ѹ�����ظ������б��ļ�" >NUL 2>NUL
reg add "HKCR\Xunlei.LSTFile.6\Shell\Open\command" /f /ve /d "\"%~dp0Program\Thunder.exe\" \"%%1\"" >NUL 2>NUL
reg add "HKCR\Xunlei.TDFile.6" /f /ve /d "Ѹ����ʱ�����ļ�" >NUL 2>NUL
reg add "HKCR\Xunlei.TDFile.6\DefaultIcon" /f /ve /d "%~dp0Program\XLTempFile.ico" >NUL 2>NUL
reg add "HKCR\Xunlei.TDFile.6\Shell\Open" /f /ve /d "ʹ��Ѹ������δ����ļ�" >NUL 2>NUL
reg add "HKCR\Xunlei.TDFile.6\Shell\Open\command" /f /ve /d "\"%~dp0Program\Thunder.exe\" \"%%1\"" >NUL 2>NUL
reg add "HKCR\Xunlei.ThunderSkin.6" /f /ve /d "Ѹ��XƤ���ļ�" >NUL 2>NUL
reg add "HKCR\Xunlei.ThunderSkin.6\DefaultIcon" /f /ve /d "%~dp0Program\thunderskin.ico" >NUL 2>NUL
reg add "HKCR\Xunlei.ThunderSkin.6\Shell\Open" /f /ve /d "ΪѸ��XӦ�ø�Ƥ��" >NUL 2>NUL
reg add "HKCR\Xunlei.ThunderSkin.6\Shell\Open\command" /f /ve /d "\"%~dp0Program\Thunder.exe\" \"%%1\"" >NUL 2>NUL
reg add "HKCR\Xunlei.XLB.6" /f /ve /d "Ѹ�����غϼ��ļ�" >NUL 2>NUL
reg add "HKCR\Xunlei.XLB.6\DefaultIcon" /f /ve /d "%~dp0Program\DownloadCollection.ico" >NUL 2>NUL
reg add "HKCR\Xunlei.XLB.6\Shell\Open" /f /ve /d "ʹ��Ѹ�ײ鿴�����غϼ��ļ�" >NUL 2>NUL
reg add "HKCR\Xunlei.XLB.6\Shell\Open\command" /f /ve /d "\"%~dp0Program\Thunder.exe\" \"%%1\"" >NUL 2>NUL


reg add "HKCU\Software\Classes\.downlist" /f /ve /d "Xunlei.LSTFile.6" >NUL 2>NUL
reg add "HKCU\Software\Classes\.td" /f /ve /d "Xunlei.TDFile.6" >NUL 2>NUL
reg add "HKCU\Software\Classes\.thunderskin" /f /ve /d "Xunlei.ThunderSkin.6" >NUL 2>NUL
reg add "HKCU\Software\Classes\.torrent" /f /ve /d "Xunlei.Bittorrent.6" >NUL 2>NUL
reg add "HKCU\Software\Classes\.xlb" /f /ve /d "Xunlei.XLB.6" >NUL 2>NUL
reg add "HKCU\Software\Classes\.xltd" /f /ve /d "Xunlei.TDFile.6" >NUL 2>NUL
reg add "HKCU\Software\Classes\ed2k" /f /v "URL Protocol" /d "" >NUL 2>NUL
reg add "HKCU\Software\Classes\ed2k\Shell\Open\command" /f /ve /d "\"%~dp0Program\Thunder.exe\" \"%%1\" -StartType:ed2k" >NUL 2>NUL
reg add "HKCU\Software\Classes\magnet" /f /v "URL Protocol" /d "" >NUL 2>NUL
reg add "HKCU\Software\Classes\magnet\Shell\Open\command" /f /ve /d "\"%~dp0Program\Thunder.exe\" \"%%1\" -StartType:magnet" >NUL 2>NUL
reg add "HKCU\Software\Classes\thunder" /f /v "URL Protocol" /d "" >NUL 2>NUL
reg add "HKCU\Software\Classes\thunder\Shell\Open\command" /f /ve /d "\"%~dp0Program\Thunder.exe\" \"%%1\" -StartType:thunder" >NUL 2>NUL
reg add "HKCU\Software\Classes\thunderx" /f /v "URL Protocol" /d "" >NUL 2>NUL
reg add "HKCU\Software\Classes\thunderx\Shell\Open\command" /f /ve /d "\"%~dp0Program\Thunder.exe\" \"%%1\" -StartType:thunderx" >NUL 2>NUL
reg add "HKCU\Software\Classes\xlb" /f /v "URL Protocol" /d "" >NUL 2>NUL
reg add "HKCU\Software\Classes\xlb\Shell\Open\command" /f /ve /d "\"%~dp0Program\Thunder.exe\" \"%%1\" -StartType:xlb" >NUL 2>NUL
reg add "HKCU\Software\Classes\Xunlei.Bittorrent.6" /f /ve /d "BT�����ļ�" >NUL 2>NUL
reg add "HKCU\Software\Classes\Xunlei.Bittorrent.6\DefaultIcon" /f /ve /d "%~dp0Program\TorrentFile.ico" >NUL 2>NUL
reg add "HKCU\Software\Classes\Xunlei.Bittorrent.6\Shell\Open" /f /ve /d "ʹ��Ѹ�����ظ�BT�ļ�" >NUL 2>NUL
reg add "HKCU\Software\Classes\Xunlei.Bittorrent.6\Shell\Open\command" /f /ve /d "\"%~dp0Program\Thunder.exe\" \"%%1\"" >NUL 2>NUL
reg add "HKCU\Software\Classes\Xunlei.LSTFile.6" /f /ve /d "Ѹ��ר�������ļ�" >NUL 2>NUL
reg add "HKCU\Software\Classes\Xunlei.LSTFile.6\DefaultIcon" /f /ve /d "%~dp0Program\XLDownloadList.ico" >NUL 2>NUL
reg add "HKCU\Software\Classes\Xunlei.LSTFile.6\Shell\Open" /f /ve /d "ʹ��Ѹ�����ظ������б��ļ�" >NUL 2>NUL
reg add "HKCU\Software\Classes\Xunlei.LSTFile.6\Shell\Open\command" /f /ve /d "\"%~dp0Program\Thunder.exe\" \"%%1\"" >NUL 2>NUL
reg add "HKCU\Software\Classes\Xunlei.TDFile.6" /f /ve /d "Ѹ����ʱ�����ļ�" >NUL 2>NUL
reg add "HKCU\Software\Classes\Xunlei.TDFile.6\DefaultIcon" /f /ve /d "%~dp0Program\XLTempFile.ico" >NUL 2>NUL
reg add "HKCU\Software\Classes\Xunlei.TDFile.6\Shell\Open" /f /ve /d "ʹ��Ѹ������δ����ļ�" >NUL 2>NUL
reg add "HKCU\Software\Classes\Xunlei.TDFile.6\Shell\Open\command" /f /ve /d "\"%~dp0Program\Thunder.exe\" \"%%1\"" >NUL 2>NUL
reg add "HKCU\Software\Classes\Xunlei.ThunderSkin.6" /f /ve /d "Ѹ��XƤ���ļ�" >NUL 2>NUL
reg add "HKCU\Software\Classes\Xunlei.ThunderSkin.6\DefaultIcon" /f /ve /d "%~dp0Program\thunderskin.ico" >NUL 2>NUL
reg add "HKCU\Software\Classes\Xunlei.ThunderSkin.6\Shell\Open" /f /ve /d "ΪѸ��XӦ�ø�Ƥ��" >NUL 2>NUL
reg add "HKCU\Software\Classes\Xunlei.ThunderSkin.6\Shell\Open\command" /f /ve /d "\"%~dp0Program\Thunder.exe\" \"%%1\"" >NUL 2>NUL
reg add "HKCU\Software\Classes\Xunlei.XLB.6" /f /ve /d "Ѹ�����غϼ��ļ�" >NUL 2>NUL
reg add "HKCU\Software\Classes\Xunlei.XLB.6\DefaultIcon" /f /ve /d "%~dp0Program\DownloadCollection.ico" >NUL 2>NUL
reg add "HKCU\Software\Classes\Xunlei.XLB.6\Shell\Open" /f /ve /d "ʹ��Ѹ�ײ鿴�����غϼ��ļ�" >NUL 2>NUL
reg add "HKCU\Software\Classes\Xunlei.XLB.6\Shell\Open\command" /f /ve /d "\"%~dp0Program\Thunder.exe\" \"%%1\"" >NUL 2>NUL

ASSOC .=. >NUL 2>NUL

::��������͸�Ŀ¼��ݷ�ʽ
mshta VBScript:Execute("Set a=CreateObject(""WScript.Shell""):Set b=a.CreateShortcut(a.SpecialFolders(""%~sdp0\"") & ""Thunder.lnk""):b.TargetPath=""%~sdp0Program\Thunder.exe"":b.WorkingDirectory=""%~sdp0"":b.Save:close")
mshta VBScript:Execute("Set a=CreateObject(""WScript.Shell""):Set b=a.CreateShortcut(a.SpecialFolders(""Desktop"") & ""\Ѹ��.lnk""):b.TargetPath=""%~sdp0Program\Thunder.exe"":b.WorkingDirectory=""%~sdp0Program"":b.Save:close")

ECHO.&ECHO ��� &TIMEOUT /t 2 >NUL&EXIT