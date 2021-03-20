const  {
   Koneksi WAC ,
   MessageType ,
   MessageOptions ,
   Mimetype ,
   WA_MESSAGE_STUB_TYPES ,
   ReconnectMode ,
   ProxyAgent ,
   waChatKey ,
   processTime ,
}  =  membutuhkan ( "@ adiwajshing / baileys" )
const  qrcode  =  membutuhkan ( "qrcode-terminal" )
const  moment  =  membutuhkan ( "moment-timezone" )
const  fs  =  membutuhkan ( "fs" )
const  axios  =  membutuhkan ( "axios" )
const  { color , bgcolor }  =  membutuhkan ( './lib/color' )
const  base64Img  =  membutuhkan ( 'base64-img' )
const  fetch  =  membutuhkan ( 'node-fetch' )
const  { fetchJson }  =  membutuhkan ( './lib/fetcher' )
const  { tunggu , getBuffer , h2k , generateMessageID , getGroupAdmins , getRandom , banner , start , info , success , close }  =  require ( './lib/functions' )
const  apikey  =  '05c109ec8c4fe01a2b0ed28c'  // Dapatkan api-lolhuman.xyz
prefiks  =  ''
 waktu  konstan =  momen ( ) . tz ( 'Asia / Jakarta' ) . format ( "HH: mm: ss" )

const  { exec }  =  membutuhkan ( "child_process" )

const  inuramsa  =  new  WAConnection ( )

inuramsa . pada ( 'qr' ,  qr  =>  {
   kode qr . menghasilkan ( qr ,  {  small : true  } )
   konsol . log ( `[ $ { time } ] o==[]::::::::::::::::>` )
} )

lindow . pada ( 'credentials-updated' ,  ( )  =>  {
   const  authInfo  =  inuramsa . base64EncodedAuthInfo ( )
   konsol . log ( `kredensial diperbarui!` )
   fs . writeFileSync ( './session.json' ,  JSON . stringify ( authInfo ,  null ,  '\ t' ) )
} )

fs . existingSync ( './session.json' )  &&  inuramsa . loadAuthInfo ( './session.json' )

inuramsa . hubungkan ( ) ;

inuramsa . on ( 'message-new' ,  async  ( lin )  =>  {
		coba  {
			if  ( ! lin . message )  return
			if  ( lin . key  &&  lin . key . remoteJid  ==  'status @ broadcast' )  return
			global . awalan
			 konten  const =  JSON . stringify ( lin . pesan )
			const  dari  =  lin . kunci . remoteJid
			 tipe  const =  Objek . kunci ( lin . pesan ) [ 0 ]
			const  { text , extendedText , kontak , lokasi , liveLocation , gambar , video , stiker , dokumen , audio , produk }  =  MessageType
			if  ( ! lin . key . fromMe )  return
			 waktu  const =  momen . tz ( 'Asia / Jakarta' ) . format ( 'DD / MM HH: mm: ss' )
			body  =  ( tipe  ===  'percakapan'  &&  lin . pesan . percakapan . startsWith ( prefix ) ) ? lin . pesan . percakapan : ( type  ==  'imageMessage' )  &&  lin . pesan . imageMessage . caption . beginWith ( prefix ) ? lin . pesan . imageMessage .keterangan : ( type  ==  'videoMessage' )  &&  lin . pesan . videoMessage . caption . beginWith ( prefix ) ? lin . pesan . videoMessage . keterangan : ( type  ==  'extendedTextMessage' )  &&  lin . pesan . extendedTextMessage . teks . beginWith ( prefix ) ? lin. pesan . extendedTextMessage . teks : ''
			var  pes  =  ( tipe  ===  'percakapan'  &&  lin . pesan . percakapan ) ? lin . pesan . percakapan : ( type  ==  'imageMessage' )  &&  lin . pesan . imageMessage . caption ? lin . pesan . imageMessage . keterangan : ( type  ==  'videoMessage' )  &&  lin. pesan . videoMessage . caption ? lin . pesan . videoMessage . keterangan : ( type  ==  'extendedTextMessage' )  &&  lin . pesan . extendedTextMessage . teks ? lin . pesan . extendedTextMessage . teks : ''
			const  perintah  =  pes . irisan ( 0 ) . trim ( ) . split ( /  + / ) . shift ( ) . toLowerCase ( )
			const  args  =  tubuh . trim ( ) . split ( /  + / ) . irisan ( 1 )
			const  reply  =  ( teks )  =>  {
				inuramsa . sendMessage ( dari ,  teks ,  teks ,  { dikutip : lin } )
			}
			warna  =  [ 'merah' , 'putih' , 'hitam' , 'biru' , 'kuning' , 'hijau' ]
			const  isCmd  =  tubuh . beginWith ( perintah )
			jika  ( isCmd )  konsol . log ( '\ x1b [1; 31m ~ \ x1b [1; 37m>' ,  '[\ x1b [1; 32mEXEC \ x1b [1; 37m]' ,  waktu ,  warna ( perintah ) ,  'args:' ,  color ( args . length ) )
			if  ( perintah . include ( "https://youtu.be" ) )  {
		    data  =  menunggu  fetchJson ( `http://api.lolhuman.xyz/api/ytaudio?apikey= $ { apikey } & url = https: //youtu.be/ $ { body . slice ( 17 ) } ` )
            if  ( Number ( data . result . link [ 0 ] . size . split ( 'MB' ) [ 0 ] )  > =  30.00 )  return  reply ( `* Data Berhasil Didapatkan! * \ n \ n * Judul: * $ { data . hasil . judul } \ n * Pengunggah: * $ { data . hasil . pengunggah } \ n \ n * Durasi: * $ { data . hasil. durasi } \ n * Tampilan: * $ { data . hasil . view } \ n * Seperti: * $ { data . hasil . suka } \ n * Tidak suka: * $ { data . hasil . tidak suka } \ n \ n * Ukuran file *: $ { data . hasil . tautan [ 0 ] . size } \ n \ n * Tautan *: $ { data . hasil . tautan [ 0 ] .link } \ n \ n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
            teks  =  `[* YTMP3 DOWNLOADER *] \ n \ n * Judul: * $ { data . hasil . judul } \ n * Pengunggah: * $ { data . hasil . pengunggah } \ n \ n * Durasi: * $ { data . hasil . durasi } \ n * Tampilan: * $ { data . hasil . view } \ n * Seperti: * $ { data . hasil . suka } \ n * Tidak suka: * $ { data . hasil .tidak suka } \ n \ n * Deskripsi: * $ { data . hasil . deskripsi } \ n \ n * Laju bit: * $ { data . hasil . tautan [ 0 ] . bitrate } \ n * Ukuran: * $ { data . hasil . tautan [ 0 ] . size } \ n \ nTunggu sebentar, mengirim audio..`
            thumb  =  menunggu  getBuffer ( data . hasil . thumbnail )
            lindow . sendMessage ( dari ,  ibu jari ,  gambar ,  { dikutip : lin ,  keterangan : teks } )
            buff  =  menunggu  getBuffer ( data . result . link [ 0 ] . link )
            lindow . sendMessage ( dari ,  buff ,  audio ,  { mimetype : 'audio / mp4' ,  nama file : ` $ { data . title } .mp3` ,  dikutip : lin } )
            }
            if  ( perintah . include ( "play" ) )  {
            reply ( '* _Tunggu beberapa menit_ *' )
            data  =  await  fetchJson ( `http://api.lolhuman.xyz/api/ytplay?apikey= $ { apikey } & query = $ { args [ 0 ] } ` )
            if  ( Number ( data . result . audio [ 0 ] . size . split ( 'MB' ) [ 0 ] )  > =  30.00 )  return  reply ( `* Data Berhasil Didapatkan! * \ n \ n * Judul: * $ { data . menghasilkan . Info . judul } \ n * Uploader: * $ { Data . hasil . Info . uploader } \ n \ n * Duration: *$ { data . hasil . info . durasi } \ n * Tampilan: * $ { data . hasil . info . view } \ n * Seperti: * $ { data . hasil . info . suka } \ n * Tidak suka: * $ { data . hasil . info . tidak suka } \ n \ n * Ukuran file *: $ { data . hasil . audio [ 0 ] . size }\ n \ n * Tautan *: $ { data . hasil . audio [ 0 ] . link } \ n \ n_Untuk durasi lebih dari batas disajikan dalam bentuk link_` )
            teks  =  `* [* PLAY MP3 *] \ n \ n * Judul: * $ { data . hasil . info . judul } \ n * Pengunggah: * $ { data . hasil . info . pengunggah } \ n \ n * Durasi: * $ { data . hasil . info . durasi } \ n * Tampilan: * $ { data . hasil . info . view } \ n * Seperti: * $ { data . hasil . info. suka } \ n * Tidak suka: * $ { data . hasil . info . tidak suka } \ n \ n * Deskripsi: * $ { data . hasil . info . deskripsi } \ n \ n * Laju bit: * $ { data . hasil . audio [ 0 ] . bitrate } \ n * Ukuran: * $ { data . hasil . audio [ 0 ] . size }\ n \ nTunggu sebentar, mengirim audio..`
            thumb  =  menunggu  getBuffer ( data . result . info . thumbnail )
            lindow . sendMessage ( dari ,  ibu jari ,  gambar ,  { dikutip : lin ,  keterangan : teks } )
            buff  =  menunggu  getBuffer ( data . result . audio [ 0 ] . link )
            lindow . sendMessage ( dari ,  buff ,  audio ,  { mimetype : 'audio / mp4' ,  nama file : ` $ { data . title } .mp3` ,  dikutip : lin } )
            }
            if  ( perintah . include ( "mp4" ) )  {
            reply ( '* _Tunggu beberapa menit_ *' )
            data  =  await  fetchJson ( `http://api.lolhuman.xyz/api/ytvideo?apikey= $ { apikey } & url = $ { args [ 0 ] } ` )
            if  ( Number ( data . result . link [ 0 ] . size . split ( 'MB' ) [ 0 ] )  > =  30.00 )  return  reply ( `* Data Berhasil Didapatkan! * \ n \ n * Judul: * $ { data . hasil . judul } \ n * Pengunggah: * $ { data . hasil . pengunggah } \ n \ n * Durasi: * $ { data . hasil. durasi } \ n * Tampilan: * $ { data . hasil . view } \ n * Seperti: * $ { data . hasil . suka } \ n * Tidak suka: * $ { data . hasil . tidak suka } \ n \ n * Ukuran file *: $ { data . hasil . tautan [ 0 ] . size } \ n \ n * Tautan *: $ { data . hasil . tautan [ 0 ] .link } \ n \ n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
            teks  =  `[* YTMP4 DOWNLOADER *] \ n \ n * Judul: * $ { data . hasil . judul } \ n * Pengunggah: * $ { data . hasil . pengunggah } \ n \ n * Durasi: * $ { data . hasil . durasi } \ n * Tampilan: * $ { data . hasil . view } \ n * Seperti: * $ { data . hasil . suka } \ n * Tidak suka: * $ { data . hasil .tidak suka } \ n \ n * Deskripsi: * $ { data . hasil . deskripsi } \ n \ n * Resolusi: * $ { data . hasil . tautan [ 0 ] . resolusi } \ n * Ukuran: * $ { data . hasil . tautan [ 0 ] . size } \ n \ nTunggu sebentar, mengirim vidio ... `
            get  =  menunggu  getBuffer ( data . result . thumbnail )
            lindow . sendMessage ( dari ,  dapatkan ,  gambar ,  { qupted : lin ,  caption : teks } )
            buff  =  menunggu  getBuffer ( data . result . link [ 0 ] . link )
            lindow . sendMessage ( dari ,  buff ,  video ,  { mimetype : 'video / mp4' ,  filename : ` $ { data . result . title } .mp4` ,  dikutip : lin ,  caption : ` $ { data . result . title } ` } )
	    }
            }  tangkap  ( e )  {
			konsol . log ( 'Kesalahan:% s' ,  warna ( e ,  'merah' ) )
		}
} )
