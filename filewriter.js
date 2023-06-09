if ('TextEncoder' in window) {
   window.FileWriter = {
      write: function(data, filename, type) {
         if (data.buffer && data.buffer.toString() == '[object ArrayBuffer]') {
            data = type ? new Blob([data], {type: type}) : new Blob([data])
         }
         if (!data instanceof Blob) {
            return
         }
         if (!filename || typeof filename != 'string') {
            if (data instanceof File && typeof data.name == 'string') {
               filename = data.name
            } else {
               filename = 'file'
            }
         }
         var type = 'application/octet-stream'
         
         var blob = new Blob([data], {type: type})
         var link = document.createElement('a')
         link.download = filename
         link.innerHTML = 'Download File'
         link.href = window.URL.createObjectURL(blob)
         document.body.appendChild(link)
         link.style.visibility = 'hidden'
         link.click()
         window.URL.revokeObjectURL(link.href)
         document.body.removeChild(link)
      },
      writeText: function(text, filename, charset) {
         if (typeof text != 'string') return
         if (!charset || typeof charset != 'string') {
            charset = 'utf-8'
         }
         var encoder = new TextEncoder(charset, { fatal: false });
         this.write(encoder.encode(text), filename, 'text/plain')
      }
   }
}