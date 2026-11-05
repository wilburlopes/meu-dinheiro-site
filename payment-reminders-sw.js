self.addEventListener('push',event=>{
 let data={};try{data=event.data?.json()??{};}catch{}
 const scope=self.registration.scope;
 event.waitUntil(self.registration.showNotification('Lembrete de pagamentos',{
  body:typeof data.body==='string'?data.body:'Abra o Guarde & Invest para conferir seus pagamentos pendentes.',
  icon:new URL('icons/icon-192.png',scope).href,badge:new URL('icons/icon-192.png',scope).href,
  tag:typeof data.tag==='string'?data.tag:'payment-reminder',data:{url:new URL('payments/',scope).href}
 }));
});
self.addEventListener('notificationclick',event=>{
 event.notification.close();
 const destination=new URL('payments/',self.registration.scope).href;
 event.waitUntil((async()=>{
  const windows=await self.clients.matchAll({type:'window',includeUncontrolled:true});
  for(const client of windows){if(client.url.startsWith(self.registration.scope)){await client.navigate(destination);return client.focus();}}
  return self.clients.openWindow(destination);
 })());
});
