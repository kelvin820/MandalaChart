CREATE TABLE `mandala_charts` (
	`id` text NOT NULL,
	`owner` text NOT NULL,
	`revision` integer NOT NULL,
	`payload` text NOT NULL,
	`updated_at` text NOT NULL,
	PRIMARY KEY(`owner`, `id`)
);
--> statement-breakpoint
CREATE INDEX `mandala_charts_owner_updated` ON `mandala_charts` (`owner`,`updated_at`);--> statement-breakpoint
CREATE TABLE `mandala_generations` (
	`id` text NOT NULL,
	`owner` text NOT NULL,
	`created_at` integer NOT NULL,
	`payload` text NOT NULL,
	PRIMARY KEY(`owner`, `id`)
);
--> statement-breakpoint
CREATE INDEX `mandala_generations_owner_created` ON `mandala_generations` (`owner`,`created_at`);