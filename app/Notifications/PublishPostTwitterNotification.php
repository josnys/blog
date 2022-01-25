<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use NotificationChannels\Twitter\TwitterChannel;
use NotificationChannels\Twitter\TwitterStatusUpdate;

class PublishPostTwitterNotification extends Notification
{
     use Queueable;

     /**
     * Create a new notification instance.
     *
     * @return void
     */
     public function __construct()
     {

     }

     /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
     public function via($notifiable)
     {
          return [TwitterChannel::class];
     }

     /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
     public function toTwitter($notifiable)
     {
          // dd($notifiable->cover->fullPath);
          return (new TwitterStatusUpdate($notifiable->details[0]->title)); // ->withImage($notifiable->cover->fullPath);
     }

     /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
     public function toArray($notifiable)
     {
          return [];
     }
}
