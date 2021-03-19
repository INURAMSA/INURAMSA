const  fs  =  membutuhkan ( 'fs' )
const  { spawn }  =  membutuhkan ( 'child_process' )
const  { getRandom }  =  membutuhkan ( './functions' )
const  ff  =  membutuhkan ( 'fluent-ffmpeg' )

ekspor . createExif  =  ( paket ,  auth )  =>  {
	 kode  const =  [ 0x00 , 0x00 , 0x16 , 0x00 , 0x00 , 0x00 ]
	const  exif  =  { "sticker-pack-id" : "com.client.tech" ,  "sticker-pack-name" : pack ,  "sticker-pack-publisher" : auth ,  "android-app-store-link" : "https://play.google.com/store/apps/details?id=com.termux" ,  "ios-app-store-link" : "https://itunes.apple.com/app/sticker-maker -studio / id1443326857 " }
	biarkan  len  =  JSON . stringify ( exif ) . panjangnya
	if  ( len  >  256 )  {
		len  =  len  -  256
		kode . lepas gigi ( 0x01 )
	}  lain  {
		kode . lepas gigi ( 0x00 )
	}
	jika  ( len  <  16 )  {
		len  =  len . toString ( 16 )
		len  =  "0"  +  len
	}  lain  {
		len  =  len . toString ( 16 )
	}
	// len = len <16? `0 $ {len.toString (16)}`: len.toString (16)
	const  _  =  Buffer . dari ( [ 0x49 ,  0x49 ,  0x2A ,  0x00 ,  0x08 ,  0x00 ,  0x00 ,  0x00 ,  0x01 ,  0x00 ,  0x41 ,  0x57 ,  0x07 ,  0x00 ] ) ;
	const  __  =  Buffer . dari ( len ,  "hex" )
	const  ___  =  Buffer . dari ( kode )
	const  ____  =  Buffer . dari ( JSON . stringify ( exif ) )
	fs . writeFileSync ( './src/sticker/data.exif' ,  Buffer . concat ( [ _ ,  __ ,  ___ ,  ____ ] ) ,  function  ( err )  {
		konsol . log ( err )
		jika  ( err )  kembali  konsol . kesalahan ( err )
		mengembalikan  `. / src / sticker / data.exif`
	} )

}

ekspor . modStick  =  ( media ,  lindow ,  tod ,  from )  =>  {
	out  =  getRandom ( '.webp' )
	coba  {
		konsol . log ( media )
		menelurkan ( 'webpmux' ,  [ '-set' , 'exif' ,  './src/sticker/data.exif' ,  media ,  '-o' ,  out ] )
		. pada ( 'exit' ,  ( )  =>  {
			lindow . sendMessage ( from ,  fs . readFileSync ( out ) ,  'stickerMessage' ,  { dikutip : tod } )
			fs . unlinkSync ( keluar )
			fs . unlinkSync ( media )
		} )
	}  tangkap  ( e )  {
		konsol . log ( e )
		lindow . sendMessage ( dari ,  'Terjadi keslahan' ,  'percakapan' ,  {  dikutip : tod  } )
		fs . unlinkSync ( media )
	}
}

ekspor . modMedia  =  ( media ,  lindow ,  tod ,  dari ,  fps )  =>  {
	out  =  getRandom ( '.webp' )
	coba  {
		ff ( media )
		. aktif ( 'error' ,  ( e )  =>  {
			konsol . log ( e )
			lindow . sendMessage ( dari ,  'Terjadi kesalahan' ,  'percakapan' ,  {  dikutip : tod  } )
			fs . unlinkSync ( media )
		} )
		. pada ( 'end' ,  ( )  =>  {
			_out  =  getRandom ( '.webp' )
			menelurkan ( 'webpmux' ,  [ '-set' , 'exif' , './src/sticker/data.exif' ,  out ,  '-o' ,  _out ] )
			. pada ( 'exit' ,  ( )  =>  {
				lindow . SendMessage ( dari ,  fs . readFileSync ( _out ) ,  'stickerMessage' ,  {  dikutip : tod  } )
				fs . unlinkSync ( keluar )
				fs . unlinkSync ( _out )
				fs . unlinkSync ( media )
			} )
		} )
		. addOutputOptions ( [ `-vcodec` , ` libwebp` , `-vf` , ` scale = 'min (320, iw)': min '(320, ih)': force_original_aspect_ratio = penurunan, fps = $ { fps } , pad = 320: 320: -1: -1: color=white@0.0, pisahkan [a] [b]; [a] palettegen = reserve_transparent = on: transparent_color = ffffff [p]; [b] [p] paletteuse` ] )
		. toFormat ( 'webp' )
		. simpan ( keluar )
	}  tangkap  ( e )  {
		konsol . log ( e )
		lindow . sendMessage ( dari ,  'Terjadi kesalahan' ,  'percakapan' ,  {  dikutip : tod  } )
		fs . unlinkSync ( media )
	}
}
