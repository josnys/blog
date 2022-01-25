<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use NotificationChannels\WebPush\WebPushMessage;
use NotificationChannels\WebPush\WebPushChannel;
use App\Models\Post;

class PublishPostWebNotification extends Notification
{
     use Queueable;
     public $post;

     /**
     * Create a new notification instance.
     *
     * @return void
     */
     public function __construct(Post $post)
     {
          $this->post = $post;
     }

     /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
     public function via($notifiable)
     {
          return [WebPushChannel::class];
     }

     /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
     public function toWebPush($notifiable, $notification)
     {
          // dd($notification);
          $title = $this->post->details[0]->title;
          return (new WebPushMessage)
               ->title("{$this->post->category->name}")
               ->body("$title")
               ->data(['id' => $this->post->id])
               ->options(['TTL' => 1000]);
     }

     /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
     public function toArray($notifiable)
     {
          return [

          ];
     }
}
